
interface Hello {
    name: string
}

let mee : Hello = {
    name: 'me'
}

it('works', () => {
    expect(mee.name).toBe('me');
})