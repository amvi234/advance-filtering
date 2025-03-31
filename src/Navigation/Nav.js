import "./Nav.css";

function Nav({ handleInputChange, query }) {
	return (
		<nav>
			<div className='nav-container'>
				<input
					type='text'
					className='search-input'
					onChange={handleInputChange}
					value={query}
					placeholder='Enter Your Search Shoes'
				/>
			</div>
		</nav>
	);
}
export default Nav;
