import dynamic from "next/dynamic";

const Page = () => {
    
    async function fetchDataWithoutCache() {
        // hour API
        try {
            const res = await fetch('https://worldtimeapi.org/api/timezone/Europe/London', { cache: 'no-cache' });
            const json = await res.json();
            console.log(json);
            return json.datetime;
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchDataWithCache() {
        // hour API
        try {
            const res = await fetch('https://worldtimeapi.org/api/timezone/Europe/London');
            const json = await res.json();
            console.log(json);
            return json.datetime;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div>
                <h1>Time of London {"(with cache)"}:</h1>
                <p>{fetchDataWithCache()}</p>
            </div>
            <br />
            <div>
                <h1>Time of London {"(without cache)"}:</h1>
                <p>{fetchDataWithoutCache()}</p>
            </div>
            
        </div>
    )
}

// const NoSSR = dynamic(() => Promise.resolve(Page), { ssr: false });

export default Page
