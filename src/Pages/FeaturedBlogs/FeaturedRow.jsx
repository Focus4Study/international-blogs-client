import PropTypes from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';

const FeaturedRow = ({blog, serial}) => {

    const { name, title, userImg } = blog
    console.log(blog);

    return (
        <>
            <tr>
                <td>{serial}</td>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={userImg? userImg : <FaUserAlt  className="text-black text-4xl w-full mx-auto"/>}/>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="font-bold">{title}</div>
                </td>
                <td><div className="font-bold">{name}</div></td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </>
    );
};

FeaturedRow.propTypes = {
    blog: PropTypes.object,
    serial:PropTypes.number
}

export default FeaturedRow;