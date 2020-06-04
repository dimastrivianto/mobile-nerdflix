const callme = ({firstName, lastName}) => {
    // const {firstName, lastName} = props
    console.log(
        `Hello ${firstName} ${lastName}`
    )
}

const data = {
    firstName: 'Maverick',
    lastName: 'Vinales'
}

callme(data)