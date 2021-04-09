import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './entities/route.entity';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.routesService.create(createRouteDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll() {
    return [
      new Route({
        title: 'Route 1',
        startPosition: {
          lat: 51.4598553,
          lng: -0.9577492,
        },
        endPosition: {
          lat: 51.4537284,
          lng: -0.9739981,
        },
      }),
      new Route({
        title: 'Route 2',
        startPosition: {
          lat: 51.4537284,
          lng: -0.9739981,
        },
        endPosition: {
          lat: 51.4658636,
          lng: -0.9863323,
        },
      }),
      new Route({
        title: 'Route 3',
        startPosition: {
          lat: 51.4598553,
          lng: -0.9577492,
        },
        endPosition: {
          lat: 51.4658636,
          lng: -0.9863323,
        },
      }),
      new Route({
        title: 'Route 4',
        startPosition: {
          lat: 51.4658636,
          lng: -0.9863323,
        },
        endPosition: {
          lat: 51.4598553,
          lng: -0.9577492,
        },
      }),
      new Route({
        title: 'Route 5',
        startPosition: {
          lat: 51.4598553,
          lng: -0.9577492,
        },
        endPosition: {
          lat: 51.4537284,
          lng: -0.9739981,
        },
      }),
    ];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routesService.update(+id, updateRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routesService.remove(+id);
  }
}
