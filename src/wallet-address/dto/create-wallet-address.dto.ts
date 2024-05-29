import { IsString, IsNotEmpty } from 'class-validator';

export class CreateWalletAddressDto {
  @IsNotEmpty()
  readonly userId: number;

  @IsString()
  readonly address: string;
}
