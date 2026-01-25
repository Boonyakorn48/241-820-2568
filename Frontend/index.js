function summiData(){
    let fristNameDom = document.querySelector('input[name=fristName]');
    let lastNameDom = document.querySelector('input[name=lastname]');
    let ageDom = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked');
    let interestsDOMs = document.querySelectorAll('input[name=interests]:checked')
    let descriptionDOM = document.querySelector('textarea[name=description]');


    let interest = ''
    for (let i = 0; i < interestsDOMs.length; i++){
        interest += interestsDOMs[i].value
        if (i != interestsDOMs.length - 1){
            interest += ','
        }
    }

    let userData = {
        fristName: fristNameDom.value,
        lastName: lastNameDom.value,
        age: ageDom.value,
        gender: genderDOM.value,
        descriptionDOM: descriptionDOM.value,
        interest: interest

    }
    console.log('submit data',userData);
}