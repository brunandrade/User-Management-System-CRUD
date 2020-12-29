
interface Hello {
    name: string
}

let meee : Hello = {
    name: 'me'
}

it('works', () => {
    expect(meee.name).toBe('me');
})