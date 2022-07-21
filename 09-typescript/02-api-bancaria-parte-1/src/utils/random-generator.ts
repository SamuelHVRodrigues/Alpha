class RandomGenerator {
    public static generate (lenght: number) {
        const min = Math.pow(10, lenght-1);
        const max = Math.pow(10, lenght) - 1;
        
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        return result.toString();
    }
}

export { RandomGenerator };
