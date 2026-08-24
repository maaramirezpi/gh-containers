import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'

function run() {

    // get inputs
    const bucket = core.getInput('bucket', {required: true})
    const bucketRegion = core.getInput('bucket-region', {required: true})
    const distFolder = core.getInput('dist-folder', {required: true})

    //github.context.
    // upload files
    const s3Uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`)


    core.notice('hello from js action');
}

run();
