import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logoLight.svg'
import insta from '../../assets/social/instagram.svg'
import facebook from '../../assets/social/facebook.svg'
import github from '../../assets/social/github.svg'
import x from '../../assets/social/x.svg'

function Icons() {
    return (
        <div className="w-[150px] mt-3 ml-2 flex justify-between">
            <figure className="w-6 h-6 hover:cursor-pointer">
                <img src={insta} alt="Img" />
            </figure>
            <figure className="w-6 h-6 hover:cursor-pointer">
                <img src={github} alt="Img" />
            </figure>
            <figure className="w-6 h-6 hover:cursor-pointer">
                <img src={x} alt="Img" />
            </figure>
            <figure className="w-6 h-6 hover:cursor-pointer">
                <img src={facebook} alt="Img" />
            </figure>
        </div>
    )
}

function FooterRight() {
    const data = [
        {
            heading: "LEARNIUM",
            linkList: [
                { linkName: "About", link: "#" },
                { linkName: "Blog", link: "#" },
                { linkName: "Careers", link: "#" },
                { linkName: "Advertize", link: "#" },
            ]
        },
        {
            heading: "Support",
            linkList: [
                { linkName: "Contact", link: "#" },
                { linkName: "Report a issue", link: "#" }
            ]
        },
        {
            heading: "Policy",
            linkList: [
                { linkName: "Terms and Condition", link: "#" },
                { linkName: "Privacy", link: "#" },
                { linkName: "Security", link: "#" }
            ]
        },
    ]

    return (
        <main className="w-2/4 flex flex-col md:flex-row justify-between">
            <FooterRightComponent data={data} />
        </main>
    )
}

function FooterRightComponent({ data }) {
    const rightComponents = data.map(ele =>
        <div key={data.indexOf(ele)} className="w-[8rem] sm:w-40 mx-4 flex flex-col">
            <h3 className="text-xl mb-2 mt-5">{ele.heading}</h3>
            <hr />
            <ul>
                <RightComponentLinks linkList={ele.linkList} />
            </ul>
        </div>
    )

    return (<>
        {rightComponents}
    </>
    )
}

function RightComponentLinks({ linkList }) {
    const links = linkList.map(e => {
        return (
            <li key={linkList.indexOf(e)} className="mt-1 hover:underline">
                <a href={e.link}>{e.linkName}</a>
            </li>
        )
    })
    return (<>
        {links}
    </>
    )
}

function Footer() {
    return (
        <div className='bg-customBlack/90'>
            <div className="container w-[82vw] mx-auto flex flex-col text-customCream">
                <div className="min-h-[300px] flex flex-col md:flex-row justify-evenly items-center overflow-hidden">
                    <aside className='sm:mr-10'>
                        <Link to="/">
                            <div className="w-40 mt-5 mx-1 hover:cursor-pointer">
                                <img src={logo} alt="" />
                            </div>
                        </Link>
                        <Icons />
                    </aside>
                    <FooterRight />
                </div>
                <section className="h-[80px] mt-5">
                    <hr />
                    <div className="mt-2">&copy; 2024 · LLC · All rights reserved</div>
                </section>
            </div>
        </div>
    )
}

export default Footer