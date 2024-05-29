import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('wallet-address')
@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Post()
  @ApiOperation({ summary: 'Create wallet address' })
  @ApiResponse({ status: 201, description: 'The wallet address has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createWalletAddressDto: CreateWalletAddressDto) {
    return this.walletAddressService.create(createWalletAddressDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all wallet addresses' })
  findAll() {
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get wallet address by id' })
  findOne(@Param('id') id: string) {
    return this.walletAddressService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update wallet address' })
  update(@Param('id') id: string, @Body() updateWalletAddressDto: CreateWalletAddressDto) {
    return this.walletAddressService.update(+id, updateWalletAddressDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete wallet address' })
  remove(@Param('id') id: string) {
    return this.walletAddressService.remove(+id);
  }
}
