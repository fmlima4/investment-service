import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentModule } from './investment/investment.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || '127.0.0.1',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'investmentdb',
      autoLoadEntities: true,
      synchronize: true,
    }),    
    InvestmentModule,  // Certifique-se de importar o módulo aqui
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
