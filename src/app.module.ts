import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { CalculatorService } from './calculator/calculator.service';
import { SumService } from './calculator/sum.service';
import { MovieModule } from './movie/movie.module';
import { Movie2Module } from './movie2/movie2.module';

@Module({
  imports: [HttpModule, MovieModule, Movie2Module],
  controllers: [AppController],
  providers: [AppService, CalculatorService, SumService],
})
export class AppModule {}
