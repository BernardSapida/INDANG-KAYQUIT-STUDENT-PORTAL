import style from "@/public/css/footer.module.css";

function Footer() {
    return (
        <footer className={`${style.portal_footer}`} style={{ "marginTop": '250px' }}>
            <p>© 2023 Kayquit Elementary School | Student Portal</p>
        </footer>
    );
}

export default Footer;