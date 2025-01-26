import Link from "next/link";
interface Route {
    path: string;
    name: string;
}

const Breadcumb = ({routes}: {routes: Route[]}) => {
    return (
        <div className="routes my-4">
        {
            routes?.map((route, i) => (
                <span key={i}>
                    <Link href={route.path}>{route.name}</Link>
                    {
                        i < routes.length - 1 && " > "
                    }
                </span>
            ))
        }
        </div>
    );
};

export default Breadcumb;
