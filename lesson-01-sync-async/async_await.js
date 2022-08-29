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

function createMember(member, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            members.push(member);

            const error = true;

            if (!error) {
                resolve();
            } else {
                reject('Error: Member already exists');
            }
        } , 2000);
    });
}

async function init() {
    await createMember({ firstname: 'Woon', lastname: 'Ong' });
    getMembers();
}


createMember({ firstname: 'Woon', lastname: 'Ong' })
    .then(getMembers)
    .catch(error => console.log(error));


async function fetchMembers() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const members = await users.json();
    console.log(members);
} 

fetchMembers();
