
type Props = {
    children: JSX.Element
}

const Layout = ({ children }: Props) => {
    const LoggedIn = {
        user: {
            name: 'Jane Doe',
        },
    };


    return (
        <>
            {children}
        </>
    )
}

export default Layout;