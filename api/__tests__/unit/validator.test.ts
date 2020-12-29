
interface Hello {
    name: string
}

let meeee : Hello = {
    name: 'me'
}

it('works', () => {
    expect(meeee.name).toBe('me');
})