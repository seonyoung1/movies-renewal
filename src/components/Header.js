import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to={`/`} className={({ isActive }) => (isActive ? 'selected' : '')}>
							Movies
						</NavLink>
						<NavLink to={`/popular`} className={({ isActive }) => (isActive ? 'selected' : '')}>
							Popular
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
