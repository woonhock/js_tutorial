const members = [
    { firstname: 'Woon Hock', lastname: 'Ong' },
    { firstname: 'John', lastname: 'Doe' },
    { firstname: 'Jane', lastname: 'Doe' },
]

function getMembers() {
    setTimeout(() => {
        console.log(members)
    }, 1000);
}

function createMember(member) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            members.push(member);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Member already exists');
            }
        } , 2000);
    });
}

const cm = createMember({ firstname: 'Woon', lastname: 'Ong' })
    .then(getMembers)
    .catch(error => console.log(error));

const users = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([users]).then(values => {
    console.log(values);
});