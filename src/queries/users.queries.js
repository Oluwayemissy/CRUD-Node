const usersQueries = {
    createUsers:`
       INSERT 
          INTO 
             users(
                first_name, 
                last_name,
                email_address, 
                phone_number,
                password,
                confirm_password
             )
       VALUES($1, $2, $3, $4, $5, $6 )
       RETURNING * 
    `,

           getAllUsers: `
           SELECT 
           * 
           FROM 
           users
    `,
            getOneUser: `
            SELECT 
            * 
            FROM 
            users 
            WHERE 
            id = $1
    `,
  
            updateUser: `
            UPDATE users
            SET first_name = $1, phone_number = $2
            WHERE id = $3 
            RETURNING *
         `,
            
            deleteUser: `
            DELETE FROM users
            WHERE 
            id = $1
    `,

    }
module.exports = usersQueries;
    
