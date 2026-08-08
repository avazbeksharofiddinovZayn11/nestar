import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { PropetyModule } from './propety/propety.module';

@Module({
  imports: [MemberModule, PropetyModule]
})
export class ComponentsModule {}
