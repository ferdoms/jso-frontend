interface errorsDictionaryInterface {
    [key:string]: string;
}

export const errorsDictionary:errorsDictionaryInterface = {
    
    // fname
    ['fname.string.min']: 'First Name must have at least 2 characters.',
    ['fname.string.empty']: 'Please type in your First Name.',

    //name
    ['lname.string.min']: 'First Name must have at least 2 characters.',
    ['lname.string.empty']: 'Please type in your Last Name.',
    
    // email
    ['email.string.empty']: 'Please enter an Email.',
    ['email.string.email']: 'Please type in a valid email.',
        
    // company
    ['companyName.string.empty']: 'Please enter a Company Name.',
    ['companyName.string.min']: 'Company Name must have at least 2 characters.',

    // job title
    ['jobTitle.string.empty']: 'Please enter a Job Title.',
    ['jobTitle.string.min']: 'Job Title must have at least 2 characters.',

    // job description
    ['jobDescription.string.empty']: 'Please enter a Job Description.',
    ['jobDescription.string.min']: 'Job Description must have at least 2 characters.',

    // job url
    ['jobUrl.string.empty']: 'Please enter the Job Url.',
    ['jobUrl.string.pattern.base']: 'Please enter a valid url.',


        // password
        ['confirm_pass.any.only']: 'Password and Password Confimation has to match.',
        ['password.string.pattern.base']: 'Your password must be between 8 and 12 characters long.',
    
}