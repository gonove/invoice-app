import express, { Application } from "express";

import userRoutes from '../routes/users'
import pedidosRoutes from '../routes/pedidos'
import productosRoutes from '../routes/productos'
import facturasRoutes from '../routes/facturas'
import clientesRoutes from '../routes/clientes'
import categoriasRoutes from '../routes/categorias'
import detallePedidoRoutes from '../routes/detalle_pedido'

import cors from "cors";

import db from '../db/connection'

class Server {

    private app: Application;
    private port:String
    // Rutas
    private apiPath = {
        users       : '/api/usuarios',
        pedidos     : '/api/pedidos',
        productos   : '/api/productos',
        facturas    : '/api/facturas',
        clientes    : '/api/clientes',
        categorias  : '/api/categorias',
        detallePedido  : '/api/detalle-pedido',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080'

        // Metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes()
    }

    async dbConnection(){

        try {

            await db.authenticate();
            console.log('Database online');

        } catch (error:any) {
            throw new Error( error )
        }
    }

    middlewares(){

        // CORS
        this.app.use( cors() )

        // Lectura del body
        this.app.use( express.json() )

        // Carpeta publica
        this.app.use( express.static('public') )
    }

    routes(){
        this.app.use( this.apiPath.users,           userRoutes )
        this.app.use( this.apiPath.pedidos,         pedidosRoutes )
        this.app.use( this.apiPath.productos,       productosRoutes )
        this.app.use( this.apiPath.facturas,        facturasRoutes )
        this.app.use( this.apiPath.clientes,        clientesRoutes )
        this.app.use( this.apiPath.categorias,      categoriasRoutes )
        this.app.use( this.apiPath.detallePedido,   detallePedidoRoutes )
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Running in localhost://${this.port}`);
        })
    }

}

export default Server;