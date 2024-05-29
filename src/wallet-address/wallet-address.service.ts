import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WalletAddress } from '../models/wallet-address.model';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectModel(WalletAddress)
    private walletAddressModel: typeof WalletAddress,
  ) {}

  async findAll(): Promise<WalletAddress[]> {
    return this.walletAddressModel.findAll();
  }

  async findOne(id: number): Promise<WalletAddress> {
    const walletAddress = await this.walletAddressModel.findByPk(id);
    if (!walletAddress) {
      throw new NotFoundException('Wallet Address not found');
    }
    return walletAddress;
  }

  async create(createWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress> {
    return this.walletAddressModel.create(createWalletAddressDto);
  }

  async update(id: number, updateWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress> {
    const walletAddress = await this.findOne(id);
    return walletAddress.update(updateWalletAddressDto);
  }

  async remove(id: number): Promise<void> {
    const walletAddress = await this.findOne(id);
    await walletAddress.destroy();
  }
}
