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
    setTimeout(() => {
        members.push(member)
        callback()
    } , 2000)
}

createMember({ firstname: 'Woon', lastname: 'Ong' }, getMembers)