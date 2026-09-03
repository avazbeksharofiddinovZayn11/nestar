import { BadRequestException, Injectable } from '@nestjs/common';
import { Like, MeLiked } from '../../libs/dto/like/like';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { T } from '../../libs/types/common';
import { Message } from '../../libs/enums/common.enum';
import { LikeInput } from '../../libs/dto/like/like.input';

@Injectable()
export class LikeService {
	constructor(@InjectModel('Like') private readonly likeModel: Model<Like>) {}

	public async toggleLike(input: LikeInput): Promise<number> {
		const search: T = {
			memberId: input.memberId,
			likeRefId: input.likeRefId,
			likeGroup: input.likeGroup,
		};

		const exist = await this.likeModel.findOne(search).exec();

		let modifier: number = 1;

		if (exist) {
			await this.likeModel.findOneAndDelete(search).exec();
			modifier = -1;
		} else {
			try {
				await this.likeModel.create(input);
			} catch (err) {
				//@ts-ignore
				console.log('Error, Service.model:', err.message);
				throw new BadRequestException(Message.CREATE_FAILED);
			}
		}

		console.log(`- Like modifier: ${modifier}`);

		return modifier;
	}

	public async checkLikeExistence(input: LikeInput): Promise<MeLiked[]> {
		const search: T = {
			memberId: input.memberId,
			likeRefId: input.likeRefId,
			likeGroup: input.likeGroup,
		};

		const result = await this.likeModel.findOne(search).exec();

		if (!result) return [];

		return [
			{
				memberId: input.memberId,
				likeRefId: input.likeRefId,
				myFavorite: true,
			},
		];
	}
}
