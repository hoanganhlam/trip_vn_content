import JobRepository from './job'
import SubmissionRepository from './submission'

export default function (app, inject) {
    const api = {
        JOB: JobRepository(app),
        Submission: SubmissionRepository(app)
    }
    inject('api', api)
}
