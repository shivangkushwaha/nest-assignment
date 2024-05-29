import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWalletAddressDto {
  @ApiProperty({
    description: 'The ID of the user',
    example: 1,
  })
  @IsNotEmpty()
  readonly userId: number;

  @ApiProperty({
    description: 'The wallet address',
    example: '0x1234567890abcdef',
  })
  @IsString()
  readonly address: string;
}
