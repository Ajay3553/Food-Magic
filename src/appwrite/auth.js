import conf from '../conf/conf'
import { Account, Client, ID } from "appwrite";

class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) return this.login({email,password});
            else return userAccount;
        }
        catch(error){
            console.log("appwrite: createAccount error", error);
        }
    }
    
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        }
        catch(e){
            console.log("appwrite: login error", e);
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(e){
            console.log("Appwrite getCurrentUser error", e);
        }
        return null;
    }

    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(e){
            console.log("Appwrite logout error", e);
        }
    }
}

const authService = new AuthService();

export default authService;