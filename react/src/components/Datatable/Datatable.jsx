import React from 'react';

export default function Datatable({ data }) {
	const columns = Object.keys(data[0]);
	console.log(data);
	return (
		<>
			<table className="tl-table tl-table-responsive">
				<thead>
					<tr>{columns.map((th) => th !== 'ticketId' && <th key={th.ticketId}>{th}</th>)}</tr>
				</thead>
				<tbody>
					{data.map((row) => {
						const { ticket, status, createdTime, replies } = row;
						return (
							<tr>
								{ticket && (
									<td data-th="Tickets">
										{ticket.map((i) => (
											<div className="tl-table__tickets" key={Math.random()}>
												{i[0]}
												<a href="#">{i.name}</a>
												<p>{i.cat}</p>
											</div>
										))}
									</td>
								)}
								{status && (
									<td data-th="Status">
										<div className="tl-table__status">
											<span className={`tl-status tl-status-${status}`}>{status}</span>
										</div>
									</td>
								)}
								{createdTime && (
									<td data-th="Created At">
										<div className="tl-table__default-text">
											<span>{createdTime}</span>
										</div>
									</td>
								)}
								{replies && (
									<td data-th="Replies">
										<div className="tl-table__replies">
											{replies.map((i) => (
												<div className="tl-table__replies--avatar" key={Math.random()}>
													<img
														src={i.userAvatar}
														alt="avatar"
														style={{ width: '25px', height: '25px', borderRadius: '50%' }}
													/>
													<div className="tl-table__default-text">{i.username}</div>
												</div>
											))}
										</div>
									</td>
								)}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
