import { Link } from 'react-router-dom';

import '../styles/header.scss';




export default function header({ Home, Payments }) {
    return (
        <header>


            <nav>
                <ul>
                    <li>
                        <Link to={Home}>
                            Home
                        </Link>
                    </li>

                    <li>Contacts</li>

                    <li>
                        <Link to={Payments}>
                            Payments
                        </Link>
                    </li>


                    <li>About</li>
                </ul>
            </nav>


        </header>
    )
}