interface errorsDictionaryInterface {
    [key:string]: string;
}

export const errorsDictionary:errorsDictionaryInterface = {
    // email
    ['email.string.empty']: 'Please enter an Email',
    
    // company
    ['companyName.string.empty']: 'Please enter a Company Name',
    ['companyName.string.min']: 'Company Name must have at least 2 characters',

    // job title
    ['jobTitle.string.empty']: 'Please enter a Job Title',
    ['jobTitle.string.min']: 'Job Title must have at least 2 characters',

    // job description
    ['jobDescription.string.empty']: 'Please enter a Job Description',
    ['jobDescription.string.min']: 'Job Description must have at least 2 characters',

    // job url
    ['jobUrl.string.empty']: 'Please enter the Job Url',
    ['jobUrl.string.pattern.base']: 'Please enter a valid url',
}