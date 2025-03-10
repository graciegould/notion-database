import { spawn } from 'child_process';
import path from 'path';
const __dirname = path.resolve() + '/server/api/routes/scrape';
import newRouter from '../../new-router.js';
const router = newRouter();

const url = "https://www.linkedin.com/jobs/view/";

router.get('/job/:id', async (req, res) => {
    const { id } = req.params;

    const scriptPath = path.resolve(__dirname, '../../../scripts/scrape-linkedin-job-listing.py');
    console.log(`Running script at path: ${scriptPath}`);

    const pythonProcess = spawn('python3', [scriptPath, id]);

    let outputData = '';
    let errorData = '';

    pythonProcess.stdout.on('data', (data) => {
        outputData += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        errorData += data.toString();
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code !== 0 || errorData) {
            return res.status(500).json({ error: 'An error occurred while scraping the job listing.', details: errorData });
        }

        try {
            const response = JSON.parse(outputData);
            return res.status(200).json(response);
        } catch (error) {
            console.error(`Error parsing JSON: ${error}`);
            return res.status(500).json({ error: 'Invalid JSON response from the scraper.' });
        }
    });
});

export default router;
