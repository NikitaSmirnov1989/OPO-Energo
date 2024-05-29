type  CourseItem = {
    id: number;
    duration: number;
    price: number;
    tag: string;
    title: string;
}
type Courses = CourseItem[];
function WithList<P extends {}>(WrappedComponent: React.ComponentType<P>){
    return (props: P) => {
        return <WrappedComponent {...props}/>;
    }
}
export default WithList;