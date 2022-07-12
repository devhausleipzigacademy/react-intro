type PictureCardProps = {
	source: string;
};

export function PictureCard({ source }: PictureCardProps) {
	return (
		<div className="picture-card">
			<img src={source} className="card-picture"></img>
		</div>
	);
}
