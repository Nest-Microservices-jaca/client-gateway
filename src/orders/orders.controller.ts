import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Inject,
} from '@nestjs/common';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ORDER_SERVICE } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderDto } from './dto';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(ORDER_SERVICE) private readonly ordersClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersClient.send('createOrder', createOrderDto);
  }

  @Get()
  findAll(@Query() paginatioDto: PaginationDto) {
    return this.ordersClient.send('findAllOrders', paginatioDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersClient.send('findOneOrder', { id });
  }
}
