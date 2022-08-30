require('dotenv').config();
const { Sequelize,DataTypes } = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD,{
    host: process.env.HOST,
    //port:process.env.PORT,
    dialect: 'mysql'
  });

  async function  connectDb(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}
connectDb();

  const user = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
 
    },
    password:{
        type: DataTypes.STRING
    }
  }, {
    // Other model options go here
  });


  //Model Methods 

  const  insertIntoDb=async(data)=>{

    try {
            // Create a new user

            // MAke this dynamic
const jane = await user.create({ name: data.name, email: data.email,password:data.password});
console.log("Jane's auto-generated ID:", jane.id);
return jane.id;

        
    } catch (error) {
        //return error;
        throw new Error(error);
    }


  }


    //Model Methods 

    const  selectAllData=async()=>{

      try {
              // Create a new user
  
              // MAke this dynamic
  const users = await user.findAll(

  /*  {
      attributes: ['email', 'name']
    }
    */
  );
return users;
          
      } catch (error) {
          //return error;
          throw new Error(error);
      }
  
  
    }
  

    // Search with where clause


     //Model Methods 

     const  searchData=async(data)=>{

      try {
              // Create a new user
  
              // MAke this dynamic
  const users = await user.findAll(
    {
      where: {
        name: data,
        
      }
    }
  );
return users;
          
      } catch (error) {
          //return error;
          throw new Error(error);
      }
  
  
    }

    const  updateData=async(data)=>{

      try {
              // Create a new user
  
              // MAke this dynamic
        const users=      await user.update({ name: data.name }, {
                where: {
                  id: data.id
                }
              });
return users;
          
      } catch (error) {
          //return error;
          throw new Error(error);
      }
  
  
    }


    const  deleteData=async(data)=>{

      try {
              // Create a new user
  
              // MAke this dynamic
        const users=await user.destroy({
          where: {
            id:data
          }
        });
return users;
          
      } catch (error) {
          //return error;
          throw new Error(error);
      }
  
  
    }


module.exports={
    insertIntoDb,
    selectAllData,
    searchData,
    updateData,
    deleteData
}