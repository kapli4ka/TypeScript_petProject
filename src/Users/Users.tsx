import React, {FC} from 'react';
import IUser from '../types/types'

interface ITypes {
    users: IUser[]
}
const Users: FC<ITypes>= ({users}) => {
    return (
        <div>
            {users.map((user =>
                    <div key={user.id}> ИД - {user.id}, @ - {user.email}, Имя -</div>
            ))}
        </div>
    );
};

export default Users;