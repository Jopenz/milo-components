declare namespace _default {
    let input: string;
    let external: string[];
    let output: ({
        file: any;
        format: string;
        sourcemap: boolean;
        name: string;
    } | {
        file: any;
        format: string;
        sourcemap: boolean;
        name?: undefined;
    })[];
    let plugins: any[];
}
export default _default;
