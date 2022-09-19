import { NavLink, useParams } from 'react-router-dom';
import '../components/GalleryNavigation.css';

const GalleryNavigation = props => {
  const galleries = props.galleries;
  //   const galleryId = useParams();
  return (
    <nav>
      <h1>Gallery</h1>
      <NavLink activeClassName="active" to={'/'} exact>
        Home
      </NavLink>
      <ul>
        {galleries.map(el => {
          return (
            <li key={el.id}>
              <NavLink activeClassName={'active'} to={`/galleries/:${el.id}`}>
                {el.name}
              </NavLink>
              ;
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default GalleryNavigation;
