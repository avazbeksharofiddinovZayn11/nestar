import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { PropetyModule } from './propety/propety.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { ViewModule } from './view/view.module';
import { FollowModule } from './follow/follow.module';
import { BoardArticleModule } from './board-article/board-article.module';
import { PropertyResolver } from './property/property.resolver';
import { PropertyModule } from './property/property.module';

@Module({
	imports: [
		MemberModule,
		AuthModule,
		PropetyModule,
		BoardArticleModule,
		LikeModule,
		ViewModule,
		CommentModule,
		FollowModule,
		PropertyModule,
	],
})
export class ComponentsModule {}
