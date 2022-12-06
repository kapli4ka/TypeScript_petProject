import {FC} from 'react';
import IUser from '../types/types'

interface ITypes {
    users: IUser[]
}
const Users: FC<ITypes>= ({users}) => {
    return (
        <div>
            {users.map((user =>
                    <div key={user.id}> ИД - {user.id}, @ - {user.email}, Имя - {user.name}, {user.phone}, {user.username}, {user.website}, {user.address.city}, {user.address.geo.lat}, {user.address.geo.lng}  </div>
            ))}
        </div>
    );
};

export default Users;