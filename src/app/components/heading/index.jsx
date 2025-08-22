export default function Heading({children, level, className = ""}) {
   
        switch (level) {
            case 2:
                return <h2 className={"text-5xl font-extrabold " + className}>{children}</h2>;
            case 3:
                return <h3 className={"text-4xl font-extrabold " + className}>{children}</h3>;
            case 4:
                return <h4 className={"text-3xl font-bold " + className}>{children}</h4>;
            case 5:
                return <h5 className={"text-3xl font-semibold " + classanme}>{children}</h5>;
            case 6:
                return <h6 className={"text-2xl font-semibold " + className}>{children}</h6>;
            default:
                return <h1 className={"text-4xl font-bold " + className}>{children}</h1>;
            }
}