import useFetch from '../hooks/UseFetch';

function CustomHookExample1() {
    const res = useFetch('https://jsonplaceholder.typicode.com/posts', {});

    console.log(res);

    return <div>CustomHookExample1</div>;
}

export default CustomHookExample1;
