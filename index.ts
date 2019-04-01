
class Bar {
    /**
     * Test method with object param
     * @param options Describing the options param
     * @param options.first A description of the first property of the options param
     */
    public foo (options: { first?: string, second: number, third: (a: number) => number }) {

    }

    /**
     * Test method with object param
     * @param options Describing the options param
     * @param options.first A description of the first property of the options param
     */
    public fooArrow = (options: { first?: string, second: number, third: (a: number) => number }) => {

    }
}