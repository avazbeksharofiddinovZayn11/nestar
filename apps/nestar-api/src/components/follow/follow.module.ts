import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FollowResolver } from './follow.resolver';
import { FollowService } from './follow.service';
import FollowSchema from '../../schemas/Follow.model';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';
import { LikeModule } from '../like/like.module';
import { MemberModule } from '../member/member.module';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Follow', schema: FollowSchema },
		]),
		AuthModule,
		ViewModule,
		LikeModule,
		MemberModule,
	],
	providers: [FollowResolver, FollowService],
	exports: [FollowService],
})
export class FollowModule {}