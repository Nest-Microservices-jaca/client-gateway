import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    NatsModule,
    // ClientsModule.register([
    //   {
    //     name: NATS_SERVICE, //PRODUCT_SERVICE,
    //     transport: Transport.NATS, //TCP,
    //     options: {
    //       servers: envs.natsServers,
    //       //host: envs.productsMicroserviceHost,
    //       //port: envs.productsMicroservicePort,
    //     },
    //   },
    // ]),
  ],
})
export class ProductsModule {}
