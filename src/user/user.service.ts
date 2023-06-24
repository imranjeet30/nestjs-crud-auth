import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepisitory:Repository<User>
    ){

    }
    get():Promise<User[]>{
        return this.userRepisitory.find();
    }

    create(createUserDto:CreateUserDto){
        return this.userRepisitory.save(createUserDto);
    }

    update(updateUserDto:UpdateUserDto, userId:any){
        return this.userRepisitory.update(userId, updateUserDto)
    }

    show(id:any){
        return this.userRepisitory.findOne({
            where: {
              id,
            },
          });
    }

    delete(id:any){
        return this.userRepisitory.delete(id);
    }

    findByEmail(email:string){
        const user = this.userRepisitory.findOne({
            where:{email}
        });
        return user;
    }
}
