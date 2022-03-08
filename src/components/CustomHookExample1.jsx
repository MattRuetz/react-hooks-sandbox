import useFetch from '../hooks/UseFetch';

function CustomHookExample1() {
    const { data, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts',
        {}
    );

    return loading ? (
        <h1>Loading...</h1>
    ) : (
        <div>
            {data.map((item) => (
                <h3 key={item.id}>{item.title}</h3>
            ))}
        </div>
    );
}

export default CustomHookExample1;
